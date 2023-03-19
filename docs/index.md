---
template: homepage.html
---

{% set overall_ste = redis_get('a_stewards_count') %}
{% set abg_ste = redis_get('a_stewards_avg_count') %}
