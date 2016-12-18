window.addEventListener("load", windowLoad, false);

function windowLoad()
{
    qs("#btnCreate").addEventListener("click", btnCreateClick, false);
    qs("#btnSave").addEventListener("click", btnSaveClick, false);
    qs("#btnLoad").addEventListener("click", btnLoadClick, false);
}

function btnCreateClick()
{
    var data = parseSV(qs("#txtData").value, "\t");
    const compiled = _.template(qs("#txtTemplate").value);
    const templateData = { "data": data };
    qs("#txtResult").value = compiled(templateData);
}

function btnSaveClick()
{
    localStorage.setItem("Template", qs("#txtTemplate").value)
    localStorage.setItem("Data", qs("#txtData").value)
}

function btnLoadClick()
{
    qs("#txtTemplate").value = localStorage.getItem("Template");
    qs("#txtData").value = localStorage.getItem("Data");

}

function qs(selector)
{
    return document.querySelector(selector);
}

function parseSV(str, delimiter) {
    if (!delimiter) delimiter = ","
    return str.split('\n').reduce(function (table, row) {
        if (!table) return;
        table.push(
            row.split(delimiter).map(function (d) { return d.trim() }) //余白削除
        );
        return table;
    }, []);
}
