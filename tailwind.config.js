module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            boxShadow: {
                card: '0 1px 0 rgba(9, 30, 66, 0.25)'
            }
        },
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
}
