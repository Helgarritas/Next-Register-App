import { Badge } from "./badge";

type Status = 'present' | 'late' | 'absent' | 'excused';

interface Props {
  status: Status;
}

const statusStyle: Record<Status, string> = {
  present: 'text-g7 bg-g4',
  late: 'text-a7 bg-a4',
  absent: 'text-r7 bg-r4',
  excused: 'text-b7 bg-b4',
};

export default function BadgeComp({ status }: Props) {
  const className = statusStyle[status] ?? 'text-gray-700 bg-gray-200';

  return (
    <Badge className={`capitalize ${className}`}>
      {status}
    </Badge>
  );
}
