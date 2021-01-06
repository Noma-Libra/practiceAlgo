-- 코드를 입력하세요
SELECT outs.ANIMAL_ID, outs.ANIMAL_TYPE, outs.NAME
FROM ANIMAL_OUTS AS outs LEFT JOIN ANIMAL_INS AS ins ON outs.ANIMAL_ID = ins.ANIMAL_ID
WHERE ins.SEX_UPON_INTAKE LIKE '%Intact%' AND outs.SEX_UPON_OUTCOME NOT LIKE '%Intact%'
ORDER BY outs.ANIMAL_ID ASC