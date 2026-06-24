<script setup>
definePageMeta({
  layout: 'admin'
})

const selectedBin = ref(null)
const isModalOpen = ref(false)

// Coordinates configured explicitly to simulate geographical layout plots
const binsOnMap = ref([
  { id: 'BIN-1042', owner: 'Marcus Vance', address: '44 Park Ave', status: 'Full', level: 92, x: '25%', y: '30%', phone: '+1 (555) 019-2834', routeZone: 'Sector Alpha' },
  { id: 'BIN-1043', owner: 'Clara Oswald', address: '12 Leaf Ln', status: 'Normal', level: 54, x: '70%', y: '20%', phone: '+1 (555) 014-9921', routeZone: 'Sector Beta' },
  { id: 'BIN-1044', owner: 'Dave Miller', address: '89 High St', status: 'Empty', level: 8, x: '40%', y: '75%', phone: '+1 (555) 017-4839', routeZone: 'Sector Alpha' },
  { id: 'BIN-1045', owner: 'Luke Pixel', address: '102 Tech Hub Rd', status: 'Full', level: 88, x: '80%', y: '65%', phone: '+1 (555) 012-7743', routeZone: 'Sector Gamma' }
])

const openBinModal = (bin) => {
  selectedBin.value = bin
  isModalOpen.value = true
}
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-xl font-bold text-slate-800">Live Geospatial Infrastructure Map</h2>
      <p class="text-xs text-slate-500">Interactive live simulated layout displaying node assets and structural alert telemetry flags.</p>
    </div>

    <div class="relative bg-slate-900 border border-slate-800 rounded-xl h-[550px] overflow-hidden shadow-inner flex flex-col justify-between p-4">
      
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:40px_40px] opacity-15 pointer-events-none"></div>
      
      <div class="relative z-10 bg-slate-950/80 backdrop-blur border border-slate-800 p-3 rounded-lg max-w-xs text-[11px] space-y-1.5 text-slate-400">
        <span class="font-bold text-slate-200 block mb-1">Infrastructure Status Key</span>
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span> Critical Overload State (≥ 85%)
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Mid-Level Capacity (50% - 84%)
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span> Optimal Active Storage Block (&lt; 50%)
        </div>
      </div>

      <div class="absolute inset-0">
        <div 
          v-for="bin in binsOnMap" 
          :key="bin.id"
          class="absolute group -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
          :style="{ left: bin.x, top: bin.y }"
          @click="openBinModal(bin)"
        >
          
          <span v-if="bin.level >= 85" class="absolute -inset-2 rounded-full bg-red-500/30 animate-ping duration-1000"></span>
          
          <div :class="[
            'w-7 h-7 rounded-full border-2 border-slate-950 shadow-lg flex items-center justify-center text-[10px] font-black text-white transition-all duration-150 transform hover:scale-125 hover:z-30',
            bin.level >= 85 ? 'bg-red-500' : bin.level >= 50 ? 'bg-amber-500' : 'bg-green-500'
          ]">
            📍
          </div>

          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-950 border border-slate-800 p-3 rounded-lg shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50 text-[11px] text-slate-300 space-y-1">
            <div class="flex justify-between items-center border-b border-slate-800 pb-1 mb-1">
              <span class="font-mono font-bold text-white">{{ bin.id }}</span>
              <span :class="['font-bold', bin.level >= 85 ? 'text-red-400' : 'text-slate-400']">{{ bin.level }}% Full</span>
            </div>
            <p class="font-semibold text-slate-200 truncate">{{ bin.owner }}</p>
            <p class="text-slate-400 truncate">{{ bin.address }}</p>
            <p class="text-[10px] text-blue-400 font-medium italic pt-0.5">Click node to manage info...</p>
          </div>

        </div>
      </div>

      <div class="relative z-10 w-full text-right text-[10px] font-mono text-slate-600 tracking-widest select-none pointer-events-none">
        SIMULATED TELEMETRY VECTOR FIELDS // REGIONAL ACTIVE INDEX
      </div>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity" @click.self="isModalOpen = false">
      <div class="w-full max-w-md bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden text-xs transform transition-all duration-200">
        
        <div class="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <div>
            <h3 class="font-mono font-bold text-slate-800 text-sm">Node Workspace: {{ selectedBin?.id }}</h3>
            <span class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{{ selectedBin?.routeZone }}</span>
          </div>
          <button @click="isModalOpen = false" class="text-slate-400 hover:text-slate-600 font-bold text-lg p-1">&times;</button>
        </div>

        <div class="p-6 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2">
            <span class="text-slate-400 font-medium">Assigned Resident Assignee</span>
            <span class="text-slate-800 font-bold text-sm">{{ selectedBin?.owner }}</span>
          </div>
          <div class="flex items-center justify-between border-b border-slate-100 pb-2">
            <span class="text-slate-400 font-medium">Physical Delivery Layout</span>
            <span class="text-slate-700 font-medium text-right">{{ selectedBin?.address }}</span>
          </div>
          <div class="flex items-center justify-between border-b border-slate-100 pb-2">
            <span class="text-slate-400 font-medium">Mobile Signal Terminal</span>
            <span class="text-slate-600 font-mono">{{ selectedBin?.phone }}</span>
          </div>
          
          <div class="space-y-1.5 pt-2">
            <div class="flex justify-between font-bold">
              <span class="text-slate-500">Live Volumetric Fill Status</span>
              <span :class="[selectedBin?.level >= 85 ? 'text-red-600' : 'text-slate-800']">{{ selectedBin?.level }}% Capacity</span>
            </div>
            <div class="w-full bg-slate-100 border border-slate-200 rounded-full h-3 overflow-hidden p-0.5 flex">
              <div 
                :class="['h-full rounded-full transition-all duration-300', selectedBin?.level >= 85 ? 'bg-red-500' : selectedBin?.level >= 50 ? 'bg-amber-500' : 'bg-green-500']"
                :style="{ width: selectedBin?.level + '%' }"
              ></div>
            </div>
          </div>
        </div>

        <div class="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end gap-2.5">
          <button @click="isModalOpen = false" class="bg-slate-200 text-slate-700 hover:bg-slate-300 font-bold px-4 py-2 rounded-lg transition">
            Close Panel
          </button>
          <button @click="isModalOpen = false; alert('Dispatch command issued.')" class="bg-[#3f51b5] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg transition shadow-md shadow-blue-600/10">
            Dispatch Clearance Truck
          </button>
        </div>

      </div>
    </div>
  </div>
</template>