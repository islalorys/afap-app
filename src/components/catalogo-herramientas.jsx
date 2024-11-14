'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export function CatalogoHerramientas() {
  const [selectedTool, setSelectedTool] = useState('')
  const [searchSeries, setSearchSeries] = useState('')

  const tools = [
    { id: '1', name: 'Martillo', series: 'MT-001' },
    { id: '2', name: 'Destornillador', series: 'DS-002' },
    { id: '3', name: 'Llave inglesa', series: 'LI-003' },
    { id: '4', name: 'Sierra', series: 'SR-004' },
    { id: '5', name: 'Taladro', series: 'TL-005' },
  ]

  const handleSearch = () => {
    console.log(`Buscando herramienta con serie: ${searchSeries}`)
    // Aquí iría la lógica de búsqueda real
  }

  return (
    (<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Catálogo de Herramientas</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Select value={selectedTool} onValueChange={setSelectedTool}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona una herramienta" />
            </SelectTrigger>
            <SelectContent>
              {tools.map((tool) => (
                <SelectItem key={tool.id} value={tool.id}>
                  {tool.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full md:w-1/2 flex gap-2">
          <Input
            type="text"
            placeholder="Buscar por serie"
            value={searchSeries}
            onChange={(e) => setSearchSeries(e.target.value)} />
          <Button onClick={handleSearch}>
            <Search className="mr-2 h-4 w-4" /> Buscar
          </Button>
        </div>
      </div>
      {selectedTool && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Herramienta seleccionada:</h2>
          <p>{tools.find(tool => tool.id === selectedTool)?.name}</p>
        </div>
      )}
    </div>)
  );
}