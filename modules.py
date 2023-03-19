import redis
import json

def define_env(env):
    
    @env.macro
    def redis_get(key):
        r = redis.Redis(host="redis-12618.c250.eu-central-1-1.ec2.cloud.redislabs.com", port=12618, password="f2Y8Bot3CLK0eH7a1aqqNmnlBP4CcFfP")
        return json.loads(r.get(key))
    
    def redis_get_source(key):
        r = redis.Redis(host="redis-12618.c250.eu-central-1-1.ec2.cloud.redislabs.com", port=12618, password="f2Y8Bot3CLK0eH7a1aqqNmnlBP4CcFfP")
        return r.get(key)

    env.variables.overall_ste = redis_get_source("a_stewards_count")
    env.variables.avg_ste = redis_get_source("a_stewards_avg_count")
