const BUTTONS = [7, 8, 9, '+/-', '->',
    4, 5, 6, '*', '/',
    1, 2, 3, '-', '+',
    'C', 0, '.', '='];

class Control {
    constructor(parentNode, tagName = 'div', className = '', content = '') {
        const el = document.createElement(tagName);
        el.className = className;
        el.textContent = content;
        if (parentNode) {
            parentNode.append(el);
        };
        this.node = el;;
    };
    destroy() {
        this.node.remove();
    };
};

class Button extends Control {
    constructor(parentNode, value) {
        super(parentNode, 'button', 'calculator__key', value)
    }
}
class Calculator extends Control {
    constructor(parentNode) {
        super(parentNode, 'div', 'calculator__wrapper')
        this.first = '';
        this.operator = null;
        this.second = '';
        this.dotsCount = 0;
        this.isDone = false;
        this.equalsPushed = false;
        this.screen = new Control(this.node, 'textarea', 'calculator__screen');
        this.screen.node.readOnly = true;
        const keysWrapper = new Control(this.node, 'div', 'keys__wrapper');
        this.keys = BUTTONS.forEach((key) => {
            const button = new Button(keysWrapper.node, key,);
            button.node.dataset.value = key;
            if (typeof key !== 'number') {
                button.node.classList.add('service');
            }
            if (key === '=') {
                button.node.classList.add('button__equals')
            };
            if (key === 'C') {
                button.node.classList.add('button__clear')
            };
            button.node.onclick = (e) => {
                const value = e.target.dataset.value;
                this.buttonPress(value);
            };
        })
    };

    buttonPress(value) {
        if ((!Number.isNaN(Number(value)) || value === '.')) {
            if (this.operator === null) {
                if (this.first.includes('.') && value === '.') {
                    null
                } else {
                    if (this.first && this.operator) {
                        this.first = '';
                        this.first += value;
                    } else {
                        this.first += value;
                        this.screen.node.innerText = this.first;
                    };
                };

            } else {
                if (!this.isDone) {

                    if (this.second.includes('.') && value === '.') {
                        null
                    } else {
                        this.second += value
                        this.screen.node.innerText = this.second
                    };
                } else {
                    this.isDone = false;
                    this.second = '';
                    this.second += value;
                    this.screen.node.innerText = this.second
                }

            };
        } else if (value === 'C' || value === '->' || value === '=' || value === '+/-') {
            if (value === '=') this.equals();
            if (value === 'C') this.clear();
            if (value === '->') this.backspace();
            if (value === '+/-') {
                if (this.first === '') return;
                this.first = - Number(this.first);
                this.screen.node.innerText = this.first;
            }
        } else {
            this.operator = value;
        };
    };
    equals() {
        if (this.operator === '+') {
            let result = (Number(this.first) * 1000 + Number(this.second) * 1000) / 1000;
            this.screen.node.innerText = result;
            this.first = result;
            this.isDone = true;
        };
        if (this.operator === '-') {
            let result = (Number(this.first) * 1000 - Number(this.second) * 1000) / 1000;
            this.screen.node.innerText = result;
            this.first = result;
            this.isDone = true;
        };
        if (this.operator === '*') {
            let result = (Number(this.first) * 1000 * Number(this.second) * 1000) / 1000000;
            this.screen.node.innerText = result;
            this.first = result;
            this.isDone = true;
        };
        if (this.operator === '/') {
            if (this.second === '0') {
                this.screen.node.innerText = 'Zero division error';
                setTimeout(() => {
                    this.clear();
                }, 2000);
            } else {
                let result = ((Number(this.first) * 1000 / Number(this.second) * 1000) / 1000000);
                this.screen.node.innerText = this.round(result);
                this.first = this.round(result);
                this.isDone = true;
            };
        };

    }
    clear() {
        this.first = '';
        this.second = '';
        this.operator = null;
        this.screen.node.innerText = ''
        this.isDone = false;
    }

    round(string) {
        let res = `${string}`.split('.')
        if (res.length <= 1) {
            return res[0];
        } else {
            let rigthPart = res[1].split('');
            if (Number(rigthPart[8]) >= 5) {
                rigthPart[7] = `${Number(rigthPart[7]) + 1}`;
                if (rigthPart[7] === '10') {
                    rigthPart[7] = '0'
                    rigthPart[6] = `${Number(rigthPart[6]) + 1}`
                };
            };
            let part = rigthPart.slice(0, 8).join('')
            return res[0] + '.' + part;
        };
    };
    backspace(){
        let str = this.screen.node.innerHTML
        if(this.first){
        this.screen.node.innerHTML = str.substr(0,str.length-1);
        this.first = this.first.toString().substr(0,this.first.length - 1);
        }
        if(this.operator){
        this.screen.node.innerHTML = str.substr(0,str.length-1);
        this.second = this.second.toString().substr(0,this.first.length - 1);
        }
    }
};

const root = document.querySelector('#root');
const calculator = new Calculator(root);

