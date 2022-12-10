Vue.createApp({
    template: "#my-app",
    data() {
        return {
            books: [
                {
                    id: 1,
                    name: '《算法导论》',
                    date: '2006-9',
                    price: 85.00,
                    count: 1
                },{
                    id: 2,
                    name: '《UNIX编程艺术》',
                    date: '2006-2',
                    price: 85.00,
                    count: 5
                },{
                    id: 3,
                    name: '《编程珠玑》',
                    date: '2008-10',
                    price: 39.00,
                    count: 3
                },{
                    id: 4,
                    name: '《GO语言》',
                    date: '2010-9',
                    price: 79.00,
                    count: 10
                },{
                    id: 5,
                    name: '《Javascript》',
                    date: '2012-3',
                    price: 99.00,
                    count: 4
                },{
                    id: 6,
                    name: '《Vue》',
                    date: '2001-9',
                    price: 45.00,
                    count: 33
                },{
                    id: 7,
                    name: '《Redis》',
                    date: '2018-2',
                    price: 99.00,
                    count: 12
                },
            ],
            total: 0
        }
    },
    methods: {
        decrease(index) {
            if (this.books[index].count >0) {
                this.books[index].count --
            }
        },
        increase(index) {
            this.books[index].count ++
        },
        calcSum() {
            let sumIs = 0
            for (let item in this.books) {
                sumIs += this.books[item].count
            }
            return sumIs
        },
        deleteBook(index) {
            this.books.splice(index, 1)
        }
    },
    watch: {
        books: {
            handler() {
                this.total = this.calcSum()
            },
            deep: true,
            immediate: true
        }
    }
}).mount("#app")