import urllib.request
import re

html = urllib.request.urlopen("https://www.codelattice.com/blog/everything-you-need-to-know-about-microsoft-azure-cloud-for-businesses/").read().decode("utf-8")
images = re.findall(r'<img[^>]+src="([^"]+)"', html)
for img in images:
    print(img)
