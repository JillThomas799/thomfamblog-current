# image_resizing_draftPhotos.py

import os
from PIL import Image


rootdir = r"C:\Users\JillT\thomfamblog-current\public\images"
destdir = r"C:\Users\JillT\thomfamblog-current\public\imagesresized"
files = os.listdir(rootdir)
print(files)

for image_name in files:
    image_path = os.path.join(rootdir, image_name)
    if os.path.isdir(image_path):
        continue
    image = Image.open(image_path)
    image.thumbnail((500, 500))
    image.save(os.path.join(destdir, image_name), "PNG")
