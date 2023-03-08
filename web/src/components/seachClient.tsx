import { Check } from "phosphor-react"
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

export function SeachClient() {

    const [cpf, setCpf] = useState('')

    async function seachClientForm(event: FormEvent) {
        event.preventDefault()
        console.log(cpf)
        setCpf('')
    }

    return (
        <div>
            <form onSubmit={seachClientForm} className="w-full flex flex-col mt-6">
                <input type="text" id="title" placeholder="Digite o CPF do cliente"
                    className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
                    value={cpf}
                    autoFocus onChange={event => setCpf(event.target.value)}
                />
                <button type="submit" className="mt-6 rounded-lg p-2 items-center justify-center gap-3 font-semibold bg-green-700 hover:bg-green-500 transition-colors focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
                    <Check size={15} weight="bold" />
                    Confirmar
                </button>
            </form>
        </div>
    )
}




