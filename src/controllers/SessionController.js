/**
 * Métodos: index, show, update, store, destroy
 * index: listagem de sessões
 * store: criar uma nova sessão
 * show: listar uma única sessão
 * update: quando queremos atualizar/alterar uma sessão
 * destroy: quando queremos deletar uma sessão
 */

import User from "../Models/User";

class SessionController {
    async store(req, res) {
        const { email } = req.body

        //Verificar se o usuario ja existe e se ele existir, retorna o email
        let user = await User.findOne({ email })

        //Se ele não existir, crie um novo
        if (!user) {
            user = await User.create({ email })
        }

        //Retorna o email se existir ou se criado
        return res.json(user)
    }
}

export default new SessionController();