class task:
    def __init__(self, index, prioritie):
        self.index = index
        self.prioritie = prioritie


def solution(priorities, location):
    answer = 0
    print_obj = [task(index, prioritie) for
                 index, prioritie in enumerate(priorities)]
    while print_obj:
        cur_task = print_obj.pop(0)
        if any(cur_task.prioritie < task_obj.prioritie for task_obj in print_obj):
            print_obj.append(cur_task)
        else:
            answer += 1
            if cur_task.index == location:
                break

    return answer


if __name__ == "__main__":
    print(solution([1, 1, 9, 1, 1, 1], 0))
