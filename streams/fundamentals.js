import { Readable, Writable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buffer = Buffer.from(String(i))

                this.push(buffer)
            }
        }, 1000)
    }
}

new OneToHundredStream()
    .pipe(process.stdout)