import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useHostData } from '../../components/HostContext';

export default function Income() {
    const {income: hostIncome, loading, error} = useHostData()
    const lastMonthIncome = hostIncome?.incomes[hostIncome.incomes.length-1]

    function formatDate(dateString) {
        const date = new Date(dateString)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear().toString().slice(-2)

        return `${day}/${month}/${year}`
    }
    
    let USDollar = new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0 
    })

    const lastTransactions = () => {
        return lastMonthIncome.recentTransactions.map((transaction) => {
            return (
                <div className='host-transaction' key={transaction.id}>
                    <h2>{USDollar.format(transaction.amount)}</h2>
                    <p>{formatDate(transaction.date)}</p>
                </div>
            )
        })
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className='host-income-container'>
            <div className='host-income-summary-text'>
                <h1>Income</h1>
                <p>Last <span className='underline-bold'>30 days</span></p>
                <h1 className='last-month-income'>{lastMonthIncome ? USDollar.format(lastMonthIncome.amount) : "No income data"}</h1>
            </div>

            <div className='bar-chart-container' >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={hostIncome.incomes}
                        margin={{ top: 20, right: 0, left: -10, bottom: 5 }}
                        >
                        <CartesianGrid strokeDasharray="5 5" vertical={false} stroke="#ddd" />
                        <XAxis dataKey="month" />
                        <YAxis tickFormatter={(value) => `$${value / 1000}K`} />
                        <Tooltip />
                        <Bar dataKey="amount" fill="#FF8C38" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='last-transactions'>
                {lastMonthIncome && <h2>Your transactions ({lastMonthIncome.recentTransactions.length})</h2>}
                <div className='host-transactions-container'>
                    {lastMonthIncome && lastTransactions()}
                </div>
            </div>
        </div>
    )
}

