import redis
import json

host = "redis-12618.c250.eu-central-1-1.ec2.cloud.redislabs.com"
port = 12618
password = "f2Y8Bot3CLK0eH7a1aqqNmnlBP4CcFfP"

def define_env(env):
    
    @env.macro
    def redis_get(key, source = None):
        r = redis.Redis(host=host, port=port, password=password)
        
        if source == True:
            return r.get(key)
        
        return json.loads(r.get(key))

    env.variables.overall_ste = int(redis_get("a_stewards_count", True))
    env.variables.avg_ste = int(redis_get("a_stewards_avg_count", True))
