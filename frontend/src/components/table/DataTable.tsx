import { Role } from "@/enums/role";
import { FaEdit, FaTrash } from "react-icons/fa";

interface TableProps<T> {
  data: T[];
  columns: { key: keyof T; label: string }[];
  role: Role;
  onEdit: (item: T) => void;
  onDelete: (item: T) => void;
}

export function DataTable<T extends { id: number | string }>({
  data,
  columns,
  role,
  onEdit,
  onDelete,
}: TableProps<T>) {
  const canEditOrDelete = role === Role.ADMIN || role === Role.STAFF;

  return (
    <table className="w-[50%] border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} className="border border-gray-300 p-2 text-center">
              {col.label}
            </th>
          ))}
          {canEditOrDelete && <th className="border border-gray-300 p-2">Ações</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            {columns.map((col) => (
              <td key={String(col.key)} className="border border-gray-300 p-2 text-center">
                {String(item[col.key])}
              </td>
            ))}
            {canEditOrDelete && (
              <td className="border border-gray-300 p-2  text-center">
                <button onClick={() => onEdit(item)} className="text-blue-600 hover:text-blue-800">
                  <FaEdit />
                </button>
                <button onClick={() => onDelete(item)} className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
