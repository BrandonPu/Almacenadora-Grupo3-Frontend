import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { useMostActiveProduct as useMostActiveProducts } from "../../shared/hooks";

export const MostActiveProduct = () => {
    const { mostEntries, mostExits, loading, error } = useMostActiveProducts();

    if (loading) return <p className="text-center">Cargando datos...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div className="p-6 grid gap-10 md:grid-cols-2">
            <div className="shadow-lg rounded-2xl p-4 bg-white">
                <h2 className="text-xl font-semibold mb-4 text-center text-green-600">Top productos con más entradas</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mostEntries}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="nameProduct" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalEntries" fill="#10B981" name="Entradas" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="shadow-lg rounded-2xl p-4 bg-white">
                <h2 className="text-xl font-semibold mb-4 text-center text-red-600">Top productos con más salidas</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mostExits}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="nameProduct" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalExits" fill="#EF4444" name="Salidas" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
