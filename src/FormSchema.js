
export default (form) => {
    return [
        {
            "children": [
                {
                    "key": "name",
                    "controlType": "ReadText",
                    "props": {
                        "children": form.getFieldValue(['basicInfo', 'name'])
                    },
                },
                {
                    "key": "type",
                    "controlType": "ReadText",
                    "props": {
                        "children": form.getFieldValue(['basicInfo', 'orphanageType'])
                    },
                },
            ]
        }
    ]
}