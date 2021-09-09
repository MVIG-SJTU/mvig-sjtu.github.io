import os
import base64
from PIL import Image

dirname = "../primitive article"
img_files = os.listdir(dirname)
for img_file in img_files:
    im = Image.open(dirname+"/"+img_file)
    width, height = im.size
    long_size = max(width, height)
    ratio = 512/long_size
    if ratio > 1:
        ratio = 1
    im = im.resize((int(width * ratio), int(height * ratio)))
    im.save(dirname+"/"+img_file,"png")
    with open(dirname+"/"+img_file, "rb") as f:
        ls_f = base64.b64encode(f.read())

    with open(img_file.replace(".","_")+".txt", "w") as f:
        f.write("data:image/png;base64,")

    with open(img_file.replace(".","_")+".txt", "ab+") as f:
        f.write(ls_f)