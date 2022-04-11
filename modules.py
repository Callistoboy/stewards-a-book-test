import redis
import json

def define_env(env):
    
    @env.macro
    def redis_get(key):
        r = redis.from_url('redis://:pd3c25ab01ee13171d13997a7c7bd6a1d74834d8dd56fc432467259aaf4dfb257@ec2-34-252-236-53.eu-west-1.compute.amazonaws.com:7069')
#         try:
#         response = json.loads(r.get(key))
#         except redis.exceptions.TimeoutError:
#             respone = 504
            
        return json.loads(r.get(key))
