window.onload = (event) => {
    if (document.readyState === "complete") {
        var warning = "Newer Version Available"
        setTimeout(() => {
            if (document.getElementById("provider-docs-content").children[0].innerHTML.includes(warning)) {
                alert('OLD PROVIDER DOCS DETECED.')
            }
        }, 1000);
    }
};
