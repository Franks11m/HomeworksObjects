export function twoFer(name: string): string {
    const firstMessage : string = `One for ${name || 'you'}`
    const secondMessage : string = ', one for me.'
    return firstMessage + secondMessage
    }
    