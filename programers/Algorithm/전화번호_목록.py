import re

def solution(phone_book):
    answer = True
    all_phone_num = '\n'.join(phone_book);
    for phone_num in phone_book:
        regex = re.compile('^' + phone_num, re.MULTILINE)
        if(len(regex.findall(all_phone_num)) != 1):
            return False
    return answer

#solution #2
def solution(phoneBook):
phoneBook = sorted(phoneBook)

for p1, p2 in zip(phoneBook, phoneBook[1:]):
    if p2.startswith(p1):
        return False
return True

#solution #3
def solution(phone_book):
    answer = True
    hash_map = {}
    for phone_number in phone_book:
        hash_map[phone_number] = 1
    for phone_number in phone_book:
        temp = ""
        for number in phone_number:
            temp += number
            if temp in hash_map and temp != phone_number:
                answer = False
    return answer
