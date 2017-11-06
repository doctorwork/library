export default async function(task) {
    await task.start('build')
    await task.watch('src/**', 'build')
}

export async function build() {
    await task.source('src/**').babel().target('dist', {
        mode: '0755'
    })
}