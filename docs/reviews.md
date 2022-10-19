---
hide:
  - toc
---

# Отзывы о работе на блоке

<style>  
.review-block {
  padding-bottom: 16px;
}
  
.review-content {
  background-color: #F5F5F5;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 0px;
  color: rgb(89, 89, 89);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
}

.review-content-text {
  flex-basis: 90%;
}

.review-content-emotion {
  min-width: 62px;
  min-height: 62px;
  margin-left: 16px;
  background-position-x: center;
  background-position-y: center;
  background-size: 62px 62px;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
}
  
.review-content-emotion-happy {
  background-image: url("{{ '../../../assets/images/smile-positive.svg' }}");
}
  
.review-content-emotion-avg {
  background-image: url("{{ '../../../assets/images/smile-positive.svg' }}");
}
  
.review-content-emotion-sad {
  background-image: url("{{ '../../../assets/images/smile-positive.svg' }}");
}

.review-date {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 4px;
}

.review-date-content {
  font-weight: inherit;
  color: rgb(140, 140, 140);
}
</style>

<small>Отзывы автоматически публикуются в течение одного часа</small>

{% set reviews = redis_get('a_feedback_reviews') %}
{% for item in reviews|reverse %}
  <div class="review-block">
    <div class="review-content">
      <div class="review-content-text" style="{% if item['comment']|length <= 30 %}font-size: 2.6em;{% elif item['comment']|length > 30 and item['comment']|length <= 60 %}font-size: 1.9em;{% elif item['comment']|length > 60 and item['comment']|length <= 120 %}font-size: 1.4em;{% else %}font-size: 1em;{% endif %}">{{ item['comment'] }}</div>
      <div class="review-content-emotion {% if item['mood'] == 'happy' %}review-content-emotion-happy{% elif item['mood'] == 'avg' %}review-content-emotion-avg{% else %}review-content-emotion-sad{% endif %}"></div>
    </div>
    <div class="review-date">
      <span class="review-date-content">{{ item['date'] }}</span></div></div>
{% endfor %}
