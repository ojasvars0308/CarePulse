import clsx from "clsx"
import Image from "next/image"

interface StatCardProps {
    type: 'scheduled' | 'pending' | 'cancelled'
    label: string
    count: number
    icon: string
}

const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div className={clsx('stat-card', {
        'bg-appointments': type === 'scheduled',
        'bg-pending': type === 'pending',
        'bg-cancelled': type === 'cancelled',
    })}>
        <div className="flex items-center gap-4">
            <Image 
                src={icon}
                height={32}
                width={32}
                alt={label}
                className="size-8 w-fit"
            />

            <h2 className="text-32-bold text-white">{count}</h2>
        </div>

        <p className="text-14-regular">{label}</p>
    </div>
  )
}

export default StatCard