export const BuildBabelLoader = (isDev: boolean) => ({
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean)
        }
    }
});