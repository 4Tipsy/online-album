# USED ONLY FROM IDE
#
# it's just a script which help me to test my app
# yep, i should use special libraries 4 it, by i dunno how to use them))
# ----------------------------------------------------------------------
# creates a [tester] account
# if it exists, overwrite it


import os, json, shutil

path_to_users_json = '/home/qwerty/my-projects/online-album/server/users.json'
path_to_users_folders = '/home/qwerty/my-projects/online-album/public/users-imgs-folders'


# tester info
tester = {}
tester["nickname"] = "tester"
tester["email"] = "tes@ter.gg"
tester["password"] = "123456"
tester["user-folder"] = "imgs__tester"



# add tester to users.json
users = ''
with open(path_to_users_json, "r", encoding='utf-8') as read_file:
  users = json.load(read_file)

if tester not in users:
  users.append(tester)

with open(path_to_users_json, "w") as write_file:
  json.dump(users, write_file, indent=4)
  print('=> in users.json restored')



# create tester's user-folder
os.chdir(path_to_users_folders)

if os.path.exists("imgs__tester"):
  shutil.rmtree("imgs__tester")

shutil.copytree("example", "imgs__tester")
print("=> folder restored")