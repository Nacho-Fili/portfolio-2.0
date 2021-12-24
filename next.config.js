/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  excludeFile: str => /.stories./.test(str)
}
