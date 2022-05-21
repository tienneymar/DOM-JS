const listSub = document.body.querySelectorAll(".minus");
const listAdd = document.body.querySelectorAll(".plus");
const listRemove = document.body.querySelectorAll(".delete");
const totalPrice = document.body.querySelector("#totalPrice");
const totalDiscount = document.body.querySelector("#totalDiscount");
const totalTax = document.body.querySelector("#totalTax");

listSub.forEach((e) => {
    e.addEventListener("click", () => {
        const input = e.parentElement.querySelector(".quantity");
        Number(input.value) <= 1 ? (input.value = 1) : (input.value -= 1);
        update(e);
    });
});

listAdd.forEach((e) => {
    e.addEventListener("click", () => {
        const input = e.parentElement.querySelector(".quantity");
        input.value = Number(input.value) + 1;
        update(e);
    });
});

listRemove.forEach((e) => {
    e.addEventListener("click", () => {
        if (confirm("Are you sure you want to remove this product?")) {
            e.parentElement.parentElement.parentElement.remove();
            sumTotal();
        }
    });
});

function update(e) {
    let quantity = Number(e.parentElement.querySelector(".quantity").value);
    let price =
        e.parentElement.parentElement.parentElement.querySelector(
            ".price"
        ).textContent;
    let discount =
        e.parentElement.parentElement.parentElement.querySelector(
            ".discount"
        ).textContent;
    var tax = e.parentElement.parentElement.parentElement.querySelector(".tax");
    var total =
        e.parentElement.parentElement.parentElement.querySelector(".total");

    discount === "-" ? (discount = 0) : discount;

    tax.textContent = `$${Math.round(
        (quantity * formatMoney(price) * 12.5) / 100
    )}.00`;
    total.textContent = `$${
        quantity * formatMoney(price) -
        formatMoney(discount) +
        formatMoney(tax.textContent)
    }.00`;
    sumTotal();
}

function sumTotal() {
    const listTotal = document.body.querySelectorAll(".total");
    const listDiscount = document.body.querySelectorAll(".discount");
    const listTax = document.body.querySelectorAll(".tax");

    totalPrice.textContent = `$${sum(listTotal)}.00`;
    totalDiscount.textContent = `$${sum(listDiscount)}.00`;
    totalTax.textContent = `$${sum(listTax)}.00`;
}

function sum(e) {
    var result = 0;
    for (let i = 0; i < e.length; i++) {
        if (e[i].innerText !== "-") {
            result += formatMoney(e[i].innerText);
        } else result += 0;
    }
    return result;
}

function formatMoney(string) {
    if (typeof string === "string") {
        return Number(string.replace("$", ""));
    } else return string;
}
