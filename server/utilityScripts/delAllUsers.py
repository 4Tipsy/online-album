import os, json, shutil

path_to_users_json = '/home/qwerty/my-projects/online-album/server/users.json'
path_to_users_folders = '/home/qwerty/my-projects/online-album/users-imgs-folders'



# clear users.json
with open(path_to_users_json, "w") as write_file:
  json.dump([], write_file)
  print('=> users.json cleared')



# del users imgs folders
folders_to_delete = os.listdir(path_to_users_folders)
folders_to_delete.remove('example') # cuz "example" folder isn't a user-folder, but REQUIRED to create them

os.chdir(path_to_users_folders)
for dir in folders_to_delete:
  shutil.rmtree(dir)
  print(f'=> {dir} removed')

print(f'=> "example" folder exists? {os.path.exists(path_to_users_folders)}')
print('=> done')