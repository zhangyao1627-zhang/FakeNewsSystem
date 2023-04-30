from django.db import models
from django.contrib.auth.models import User

# User (系统自带对应的属性)

# SearchBlog

class SearchBlog(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null = True)
    search_blog_id = models.AutoField(primary_key = True, editable = False)
    search_blog_content = models.TextField(max_length = 500, blank = True)

# AnswerBlog
class AnswerBlog(models.Model):
    search_blog = models.ForeignKey(SearchBlog, on_delete=models.SET_NULL, null=True)
    answer_blog_id = models.AutoField(primary_key = True, editable = False)
    answer_blog_title = models.CharField(max_length=200, null=True, blank=True)
    answer_blog_author = models.CharField(max_length=200, null=True, blank=True)
    answer_blog_tags = models.CharField(max_length=200, null=True, blank=True)
    answer_blog_article = models.TextField(max_length = 50000, blank = True)
