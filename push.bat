@echo off
chcp 65001

echo авто-пуш

git add .

set /p MSG="Введите текст коммита: "
git commit -m "%MSG%"

git push
echo все успешно отправлено на GitHub!
pause