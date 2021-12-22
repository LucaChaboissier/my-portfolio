// import Session from '@ioc:Adonis/Addons/Session'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/models/User'

export default class AuthController {
    public async signin ({ view }: HttpContextContract) {
        return view.render('auth/signin')
    }
    
    public async login ({ request, auth, response }: HttpContextContract) {
        console.log(request.all())
        const email = request.input('email')
        const password = request.input('password')

        await auth.attempt(email, password)
        await response.redirect('/')
    }

    public async signup ({ view }: HttpContextContract) {
        return view.render('auth/signup')
    }

    public async register ({ request, view }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')

        await User.create({
            email,
            password
        })

        return view.render('auth/register')
    }

    public async disconnect ({ auth, response }: HttpContextContract) {
        await auth.logout()
        await response.redirect("/")
    }
}
