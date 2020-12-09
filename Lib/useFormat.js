"use strict";
exports.__esModule = true;
exports.useIsoDateToDateString = exports.useWebsiteRegex = exports.useEmailRegex = exports.usePhoneRegex = exports.useCepRegex = exports.useRg = exports.useResedentialPhone = exports.useMobilePhone = exports.useCep = exports.useCpf = exports.useMoney = void 0;
var numbResolve_hook_1 = require("./Hooks/numbResolve.hook");
function useMoney(money) {
    if (!money)
        return '';
    return "R$ " + money.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
exports.useMoney = useMoney;
function useCpf(cpf) {
    var cpfValidate = numbResolve_hook_1.numbResolve(cpf);
    if (cpfValidate.length != 11)
        throw "CPF inválido";
    return cpfValidate.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "\$1.\$2.\$3-\$4");
}
exports.useCpf = useCpf;
function useCep(cep) {
    var cepValidate = numbResolve_hook_1.numbResolve(cep);
    if (cepValidate.length != 8)
        throw "Cep inválido";
    return cepValidate.replace(/(\d{5})(\d{3})/, "\$1-\$2");
}
exports.useCep = useCep;
console.log('12345678');
console.log(12345678);
function useResedentialPhone(resedentialPhone) {
    var mobilePhoneValidate = numbResolve_hook_1.numbResolve(resedentialPhone);
    if (mobilePhoneValidate.length <= 10)
        return mobilePhoneValidate.replace(/(\d{2})(\d{4})(\d{4})/, "(\$1) \$2-\$3");
    throw "Número inválido";
}
exports.useResedentialPhone = useResedentialPhone;
function useMobilePhone(mobilePhone) {
    var mobilePhoneValidate = numbResolve_hook_1.numbResolve(mobilePhone);
    if (mobilePhoneValidate.length <= 11)
        return mobilePhoneValidate.replace(/(\d{2})(\d{5})(\d{4})/, "(\$1) \$2-\$3");
    throw "Número inválido";
}
exports.useMobilePhone = useMobilePhone;
function useRg(rg) {
    var rgValidate = numbResolve_hook_1.numbResolve(rg);
    if (rgValidate.length !== 9)
        throw "RG inválido";
    return String(rg).replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "\$1.\$2.\$3-\$4");
}
exports.useRg = useRg;
function useIsoDateToDateString(date) {
    return date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
}
exports.useIsoDateToDateString = useIsoDateToDateString;
var useCepRegex = /\d{5}-?\d{3}/;
exports.useCepRegex = useCepRegex;
var usePhoneRegex = /\(\d{2}\) \d{5} \d{4}/;
exports.usePhoneRegex = usePhoneRegex;
var useEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
exports.useEmailRegex = useEmailRegex;
var useWebsiteRegex = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
exports.useWebsiteRegex = useWebsiteRegex;
