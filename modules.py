import redis
import json

def define_env(env):
    
    @env.macro
    def redis_get(key):
        r = redis.Redis(host="redis-12618.c250.eu-central-1-1.ec2.cloud.redislabs.com", port=12618, password="f2Y8Bot3CLK0eH7a1aqqNmnlBP4CcFfP")
        return json.loads(r.get(key))

    env.variables.overall_ste = redis_get("a_stewards_count")[0]
    env.variables.avg_ste = redis_get("a_stewards_avg_count")[0]
