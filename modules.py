import redis
import json

def define_env(env):
    
    @env.macro
    def redis_get(key):
        r = redis.from_url('redis://:pf887f38265ccb526c53e7d41f972dd08d144ad058e0a6cbc8b50d478dc544041@ec2-52-209-147-40.eu-west-1.compute.amazonaws.com:22259')
        return json.loads(r.get(key))
