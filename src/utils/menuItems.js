import { dashboard, expenses, transactions, trend } from '../utils/Icons'

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/'
    },
    {
        id: 3,
        title: "Income",
        icon: trend,
        link: "/income",
    },
    {
        id: 4,
        title: "Expense",
        icon: expenses,
        link: "/expense",
    },
]