namespace empresa{
    export class Cliente extends Pessoa{

        private _codigo: number;
        private _saldo: number = 0;

        constructor(codigo:number){
            super(); //pega todos os construtores de 'Pessoa' ou da classe chamada.
            this._codigo = codigo;
        }

        get codigo(){
            return this._codigo;
        }

        get saldo(){
            return this._saldo;
        }

        public deposita(valor:number){
            // this._saldo = this._saldo + valor;
            this._saldo += valor;
        }

        public comprar(valorCompra:number):boolean{
            if(this._saldo>= valorCompra){
                this._saldo = this._saldo - valorCompra;
                // this._saldo -= valorCompra; mesma coisa da linha de cima
                return true;
            }
            else{
                return false;
            }
        }

    }
}