from dataclasses import asdict
from util.plugin_dev.api.v1.config import update_config
from type.config import CONFIG_METADATA_2
from type.types import Context

def try_cast(value: str, type_: str):
    if type_ == "int" and value.isdigit():
        return int(value)
    elif type_ == "float" and isinstance(value, str) \
        and value.replace(".", "", 1).isdigit():
        return float(value)
    elif type_ == "float" and isinstance(value, int):
        return float(value)

def get_default_val_by_type(type_: str):
    if type_ == "int":
        return 0
    elif type_ == "float":
        return 0.0
    elif type_ == "bool":
        return False
    elif type_ == "string":
        return ""
    elif type_ == "text":
        return ""
    elif type_ == "list":
        return []
    elif type_ == "object":
        return {}
        

def validate_config(data, context: Context):
    errors = []
    def validate(data, metadata=CONFIG_METADATA_2, path=""):
        for key, meta in metadata.items():
            if key not in data:
                continue
            value = data[key]
            # null 转换
            if value is None:
                data[key] = get_default_val_by_type(meta["type"])
                continue
            # 递归验证
            if meta["type"] == "list" and isinstance(value, list):
                for item in value:
                    validate(item, meta["items"], path=f"{path}{key}.")
            elif meta["type"] == "object" and isinstance(value, dict):
                validate(value, meta["items"], path=f"{path}{key}.")

            if meta["type"] == "int" and not isinstance(value, int):
                casted = try_cast(value, "int")
                if casted is None:
                    errors.append(f"错误的类型 {path}{key}: 期望是 int, 得到了 {type(value).__name__}")
                data[key] = casted
            elif meta["type"] == "float" and not isinstance(value, float):
                casted = try_cast(value, "float")
                if casted is None:
                    errors.append(f"错误的类型 {path}{key}: 期望是 float, 得到了 {type(value).__name__}")
                data[key] = casted
            elif meta["type"] == "bool" and not isinstance(value, bool):
                errors.append(f"错误的类型 {path}{key}: 期望是 bool, 得到了 {type(value).__name__}")
            elif meta["type"] in ["string", "text"] and not isinstance(value, str):
                errors.append(f"错误的类型 {path}{key}: 期望是 string, 得到了 {type(value).__name__}")
            elif meta["type"] == "list" and not isinstance(value, list):
                errors.append(f"错误的类型 {path}{key}: 期望是 list, 得到了 {type(value).__name__}")
            elif meta["type"] == "object" and not isinstance(value, dict):
                errors.append(f"错误的类型 {path}{key}: 期望是 dict, 得到了 {type(value).__name__}")
                validate(value, meta["items"], path=f"{path}{key}.")
    validate(data)
    
    # hardcode warning
    data['config_version'] = context.config_helper.config_version
    data['dashboard'] = asdict(context.config_helper.dashboard)
    
    return errors

def save_astrbot_config(post_config: dict, context: Context):
    '''验证并保存配置'''
    errors = validate_config(post_config, context)
    if errors:
        raise ValueError(f"格式校验未通过: {errors}")
    context.config_helper.flush_config(post_config)
    
def save_extension_config(post_config: dict):
    if 'namespace' not in post_config:
        raise ValueError("Missing key: namespace")
    if 'config' not in post_config:
        raise ValueError("Missing key: config")

    namespace = post_config['namespace']
    config: list = post_config['config'][0]['body']
    for item in config:
        key = item['path']
        value = item['value']
        typ = item['val_type']
        if typ == 'int':
            if not value.isdigit():
                raise ValueError(f"错误的类型 {namespace}.{key}: 期望是 int, 得到了 {type(value).__name__}")
            value = int(value)
        update_config(namespace, key, value)
