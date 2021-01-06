-- 코드를 입력하세요
SELECT ins.ANIMAL_ID, ins.NAME
FROM ANIMAL_OUTS AS outs LEFT JOIN ANIMAL_INS AS ins ON outs.ANIMAL_ID = ins.ANIMAL_ID
WHERE ins.DATETIME > outs.DATETIME
ORDER BY ins.DATETIME ASC