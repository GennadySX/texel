/**
 * Project texel
 * @author GennadySX on 17/07/2020
 */


export const paramsJson  = {
    "name": "sample-web-service",
    "title": "Пример веб-сервиса",
    "description": "Описание веб-сервиса",
    "parameters": {
        "input": [
            {
                "type": "select",
                "name": "input_text",
                "title": "Текстовое значение, выбираемое из списка и передаваемое на вход программе",
                "items": [
                    {"value": "text1", "title": "Первый элемент"},
                    {"value": "text2", "title": "Второй элемент"}
                ]
            },
            {
                "type": "number",
                "name": "input_num",
                "title": "Числовое значение, передаваемое на вход программе"
            },
           
        ],
        "output": [
            {
                "type": "string",
                "name": "result",
                "title": "Результат выполнения программы"
            }
        ]
    },
    "commands": {
        "start": "./start.sh ${input_num} ${input_text}",
    },
}