module.exports = {

    default: {

        paths: [
            "bdd/features/**/*.feature"
        ],

        require: [
            "bdd/steps/**/*.ts",
            "bdd/hooks/**/*.ts"
        ],

        requireModule: [
            "ts-node/register"
        ],

        format: [
            "progress"
        ],

        publishQuiet: true

    }

};