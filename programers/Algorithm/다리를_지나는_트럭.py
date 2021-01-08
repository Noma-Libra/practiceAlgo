def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = [0] * bridge_length
    # 다리를 건너고 있는 트럭들의 상태를 나타내는 Queue
    # [ 0, 0] 현재 다리에는 아무도 없음, []이 되면 모든 트럭이 다리를 지나감을 의미함

    while bridge:
        answer += 1
        bridge.pop(0)
        if truck_weights:
            if sum(bridge) + truck_weights[0] <= weight:
                bridge.append(truck_weights.pop(0))
            else:
                bridge.append(0)

    return answer
