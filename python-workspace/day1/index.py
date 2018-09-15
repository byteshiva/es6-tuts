from textblob import TextBlob
wiki = TextBlob("Python is a high-level, general-purpose programming language.")
en_blob = TextBlob(u'Simple is better than complex.')
en_blob.translate(to='es')
chinese_blob = TextBlob(u"美丽优于丑陋")
chinese_blob.translate(from_lang="zh-CN", to='en')

