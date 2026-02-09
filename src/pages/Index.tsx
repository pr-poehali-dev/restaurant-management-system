import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const revenueData = [
  { month: 'Янв', revenue: 850000, cost: 620000 },
  { month: 'Фев', revenue: 920000, cost: 680000 },
  { month: 'Мар', revenue: 1100000, cost: 750000 },
  { month: 'Апр', revenue: 980000, cost: 710000 },
  { month: 'Май', revenue: 1250000, cost: 820000 },
  { month: 'Июн', revenue: 1350000, cost: 880000 },
];

const inventoryData = [
  { 
    name: 'Мясо', 
    value: 320000, 
    status: 'normal',
    quantity: 450,
    unit: 'кг',
    optimal: 420,
    lastMonth: 380,
    deltaRub: -18000,
    deltaQty: 70,
    avgPrice: 711,
    turnover: 12,
    spoilage: 2.1,
    suppliers: 3
  },
  { 
    name: 'Овощи', 
    value: 145000, 
    status: 'low',
    quantity: 280,
    unit: 'кг',
    optimal: 450,
    lastMonth: 520,
    deltaRub: -95000,
    deltaQty: -240,
    avgPrice: 518,
    turnover: 8,
    spoilage: 8.5,
    suppliers: 5
  },
  { 
    name: 'Напитки', 
    value: 280000, 
    status: 'normal',
    quantity: 1850,
    unit: 'л',
    optimal: 1800,
    lastMonth: 1750,
    deltaRub: 22000,
    deltaQty: 100,
    avgPrice: 151,
    turnover: 15,
    spoilage: 0.8,
    suppliers: 4
  },
  { 
    name: 'Морепродукты', 
    value: 420000, 
    status: 'high',
    quantity: 185,
    unit: 'кг',
    optimal: 120,
    lastMonth: 95,
    deltaRub: 142000,
    deltaQty: 90,
    avgPrice: 2270,
    turnover: 6,
    spoilage: 5.2,
    suppliers: 2
  },
  { 
    name: 'Специи', 
    value: 85000, 
    status: 'critical',
    quantity: 45,
    unit: 'кг',
    optimal: 180,
    lastMonth: 165,
    deltaRub: -226800,
    deltaQty: -120,
    avgPrice: 1889,
    turnover: 18,
    spoilage: 1.2,
    suppliers: 6
  },
];

const inventoryTrends = [
  { week: 'Нед 1', meat: 380, veg: 520, drinks: 1650, sea: 95, spices: 165 },
  { week: 'Нед 2', meat: 410, veg: 480, drinks: 1700, sea: 110, spices: 142 },
  { week: 'Нед 3', meat: 435, veg: 350, drinks: 1780, sea: 145, spices: 98 },
  { week: 'Нед 4', meat: 450, veg: 280, drinks: 1850, sea: 185, spices: 45 },
];

const topProducts = [
  { name: 'Стейк Рибай', sales: 1240, profit: 425000, margin: 65 },
  { name: 'Паста Карбонара', sales: 2150, profit: 385000, margin: 72 },
  { name: 'Салат Цезарь', sales: 1890, profit: 280000, margin: 68 },
  { name: 'Том Ям', sales: 980, profit: 245000, margin: 70 },
  { name: 'Тирамису', sales: 1560, profit: 195000, margin: 75 },
];

const bottomProducts = [
  { name: 'Фондю', sales: 45, profit: -12000, margin: -8 },
  { name: 'Устрицы', sales: 78, profit: -8500, margin: -5 },
  { name: 'Трюфельная паста', sales: 62, profit: 2100, margin: 3 },
];

const staffData = [
  { department: 'Кухня', count: 18, efficiency: 92 },
  { department: 'Зал', count: 24, efficiency: 88 },
  { department: 'Бар', count: 8, efficiency: 95 },
  { department: 'Управление', count: 6, efficiency: 90 },
];

const COLORS = ['#8B5CF6', '#0EA5E9', '#F97316', '#10B981', '#EF4444'];

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const metrics = [
    {
      title: 'Общая выручка',
      value: '6 450 000 ₽',
      change: '+15.3%',
      trend: 'up',
      icon: 'TrendingUp',
      gradient: 'gradient-purple',
    },
    {
      title: 'Чистая прибыль',
      value: '1 940 000 ₽',
      change: '+22.1%',
      trend: 'up',
      icon: 'Wallet',
      gradient: 'gradient-blue',
    },
    {
      title: 'Убытки',
      value: '142 000 ₽',
      change: '-8.5%',
      trend: 'down',
      icon: 'AlertTriangle',
      gradient: 'bg-destructive',
    },
    {
      title: 'Рентабельность',
      value: '30.1%',
      change: '+4.2%',
      trend: 'up',
      icon: 'LineChart',
      gradient: 'gradient-purple',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-64 h-screen sticky top-0 border-r border-border bg-card">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl gradient-purple flex items-center justify-center">
                <Icon name="UtensilsCrossed" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">RestoCRM</h1>
                <p className="text-xs text-muted-foreground">Pro Edition</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { id: 'dashboard', icon: 'LayoutDashboard', label: 'Главная' },
                { id: 'inventory', icon: 'Package', label: 'Инвентаризация' },
                { id: 'analytics', icon: 'BarChart3', label: 'Аналитика' },
                { id: 'staff', icon: 'Users', label: 'Персонал' },
                { id: 'products', icon: 'ShoppingCart', label: 'Товары' },
                { id: 'finance', icon: 'Wallet', label: 'Финансы' },
                { id: 'reports', icon: 'FileText', label: 'Отчеты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'hover:bg-accent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 border-b border-border bg-card/80 backdrop-blur-lg">
            <div className="flex items-center justify-between p-6">
              <div>
                <h2 className="text-2xl font-bold text-gradient">
                  {activeSection === 'dashboard' && 'Панель управления'}
                  {activeSection === 'inventory' && 'Инвентаризация'}
                  {activeSection === 'analytics' && 'Аналитика'}
                  {activeSection === 'staff' && 'Управление персоналом'}
                  {activeSection === 'products' && 'Товары'}
                  {activeSection === 'finance' && 'Финансы'}
                  {activeSection === 'reports' && 'Отчеты'}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Данные обновлены: {new Date().toLocaleString('ru-RU')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon">
                  <Icon name="Bell" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Settings" size={20} />
                </Button>
                <div className="w-10 h-10 rounded-full gradient-purple flex items-center justify-center">
                  <Icon name="User" size={20} className="text-white" />
                </div>
              </div>
            </div>
          </header>

          <div className="p-6 space-y-6">
            {activeSection === 'dashboard' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {metrics.map((metric, idx) => (
                    <Card
                      key={idx}
                      className="border-border/50 bg-gradient-card backdrop-blur-sm hover:scale-105 transition-transform duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl ${metric.gradient} flex items-center justify-center`}>
                            <Icon name={metric.icon} size={24} className="text-white" />
                          </div>
                          <Badge variant={metric.trend === 'up' ? 'default' : 'destructive'}>
                            {metric.change}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                        <p className="text-3xl font-bold">{metric.value}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Динамика доходов и расходов</CardTitle>
                      <CardDescription>За последние 6 месяцев</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={revenueData}>
                          <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="month" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#1F2937',
                              border: '1px solid #374151',
                              borderRadius: '8px',
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#8B5CF6"
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                            name="Выручка"
                          />
                          <Area
                            type="monotone"
                            dataKey="cost"
                            stroke="#0EA5E9"
                            fillOpacity={1}
                            fill="url(#colorCost)"
                            name="Расходы"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Эффективность персонала</CardTitle>
                      <CardDescription>По отделам</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={staffData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="department" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#1F2937',
                              border: '1px solid #374151',
                              borderRadius: '8px',
                            }}
                          />
                          <Bar dataKey="efficiency" fill="#8B5CF6" radius={[8, 8, 0, 0]} name="Эффективность %" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {activeSection === 'inventory' && (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2 border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Состояние складских запасов</CardTitle>
                      <CardDescription>Текущая стоимость товаров на складе</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={350}>
                        <PieChart>
                          <Pie
                            data={inventoryData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {inventoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#1F2937',
                              border: '1px solid #374151',
                              borderRadius: '8px',
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Статус позиций</CardTitle>
                      <CardDescription>Требуют внимания</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {inventoryData.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{item.name}</span>
                            <Badge
                              variant={
                                item.status === 'critical'
                                  ? 'destructive'
                                  : item.status === 'low'
                                  ? 'outline'
                                  : 'default'
                              }
                            >
                              {item.status === 'critical' && 'Критично'}
                              {item.status === 'low' && 'Низкий'}
                              {item.status === 'normal' && 'Норма'}
                              {item.status === 'high' && 'Избыток'}
                            </Badge>
                          </div>
                          <Progress
                            value={
                              item.status === 'critical'
                                ? 15
                                : item.status === 'low'
                                ? 35
                                : item.status === 'normal'
                                ? 65
                                : 95
                            }
                            className="h-2"
                          />
                          <p className="text-xs text-muted-foreground">
                            {item.value.toLocaleString('ru-RU')} ₽
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Динамика запасов за месяц</CardTitle>
                      <CardDescription>Изменение количества по категориям</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={inventoryTrends}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="week" stroke="#9CA3AF" />
                          <YAxis stroke="#9CA3AF" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#1F2937',
                              border: '1px solid #374151',
                              borderRadius: '8px',
                            }}
                          />
                          <Line type="monotone" dataKey="meat" stroke="#8B5CF6" strokeWidth={2} name="Мясо" />
                          <Line type="monotone" dataKey="veg" stroke="#10B981" strokeWidth={2} name="Овощи" />
                          <Line type="monotone" dataKey="drinks" stroke="#0EA5E9" strokeWidth={2} name="Напитки" />
                          <Line type="monotone" dataKey="sea" stroke="#F97316" strokeWidth={2} name="Морепродукты" />
                          <Line type="monotone" dataKey="spices" stroke="#EF4444" strokeWidth={2} name="Специи" />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Оборачиваемость и порча</CardTitle>
                      <CardDescription>Дней оборота и % потерь</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={inventoryData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="name" stroke="#9CA3AF" />
                          <YAxis yAxisId="left" stroke="#9CA3AF" />
                          <YAxis yAxisId="right" orientation="right" stroke="#EF4444" />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#1F2937',
                              border: '1px solid #374151',
                              borderRadius: '8px',
                            }}
                          />
                          <Bar yAxisId="left" dataKey="turnover" fill="#0EA5E9" radius={[8, 8, 0, 0]} name="Дней оборота" />
                          <Bar yAxisId="right" dataKey="spoilage" fill="#EF4444" radius={[8, 8, 0, 0]} name="Порча %" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="FileSpreadsheet" className="text-primary" />
                      Детальный анализ позиций
                    </CardTitle>
                    <CardDescription>Полная информация по каждой категории товаров</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {inventoryData.map((item, idx) => {
                        const optimalDiff = item.quantity - item.optimal;
                        const optimalPercent = ((optimalDiff / item.optimal) * 100).toFixed(1);
                        const isOverstock = optimalDiff > 0;
                        const isUnderstock = optimalDiff < 0;
                        
                        return (
                          <div key={idx} className="p-6 rounded-xl border border-border bg-accent/20">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-full ${
                                  item.status === 'critical' ? 'bg-destructive animate-pulse' :
                                  item.status === 'low' ? 'bg-yellow-500' :
                                  item.status === 'high' ? 'bg-orange-500' :
                                  'bg-green-500'
                                }`} />
                                <h3 className="text-xl font-bold">{item.name}</h3>
                              </div>
                              <Badge
                                variant={
                                  item.status === 'critical' ? 'destructive' :
                                  item.status === 'low' ? 'outline' :
                                  item.status === 'high' ? 'secondary' :
                                  'default'
                                }
                                className="text-sm"
                              >
                                {item.status === 'critical' && '⚠️ Критический дефицит'}
                                {item.status === 'low' && '⬇️ Низкий запас'}
                                {item.status === 'normal' && '✓ В норме'}
                                {item.status === 'high' && '⬆️ Избыток'}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">Текущий запас</p>
                                <p className="text-2xl font-bold text-primary">
                                  {item.quantity} <span className="text-base text-muted-foreground">{item.unit}</span>
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">Оптимальный</p>
                                <p className="text-2xl font-bold">
                                  {item.optimal} <span className="text-base text-muted-foreground">{item.unit}</span>
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">Стоимость</p>
                                <p className="text-2xl font-bold text-secondary">
                                  {(item.value / 1000).toFixed(0)}K ₽
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-xs text-muted-foreground">Ср. цена</p>
                                <p className="text-2xl font-bold">
                                  {item.avgPrice} <span className="text-base text-muted-foreground">₽/{item.unit}</span>
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div className="p-3 rounded-lg bg-card/50">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-muted-foreground">Отклонение от оптимума</span>
                                  {isOverstock && <Icon name="ArrowUp" className="text-orange-500" size={18} />}
                                  {isUnderstock && <Icon name="ArrowDown" className="text-yellow-500" size={18} />}
                                  {!isOverstock && !isUnderstock && <Icon name="Check" className="text-green-500" size={18} />}
                                </div>
                                <p className={`text-lg font-bold ${
                                  isOverstock ? 'text-orange-500' : 
                                  isUnderstock ? 'text-yellow-500' : 
                                  'text-green-500'
                                }`}>
                                  {optimalDiff > 0 ? '+' : ''}{optimalDiff} {item.unit} ({optimalPercent > 0 ? '+' : ''}{optimalPercent}%)
                                </p>
                              </div>

                              <div className="p-3 rounded-lg bg-card/50">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-muted-foreground">Дельта к прошлому месяцу</span>
                                  {item.deltaQty > 0 ? 
                                    <Icon name="TrendingUp" className="text-green-500" size={18} /> : 
                                    <Icon name="TrendingDown" className="text-destructive" size={18} />
                                  }
                                </div>
                                <p className={`text-lg font-bold ${item.deltaQty > 0 ? 'text-green-500' : 'text-destructive'}`}>
                                  {item.deltaQty > 0 ? '+' : ''}{item.deltaQty} {item.unit}
                                </p>
                                <p className={`text-sm ${item.deltaRub > 0 ? 'text-green-500' : 'text-destructive'}`}>
                                  {item.deltaRub > 0 ? '+' : ''}{item.deltaRub.toLocaleString('ru-RU')} ₽
                                </p>
                              </div>

                              <div className="p-3 rounded-lg bg-card/50">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm text-muted-foreground">Оборачиваемость</span>
                                  <Icon name="RotateCw" className="text-primary" size={18} />
                                </div>
                                <p className="text-lg font-bold">{item.turnover} дней</p>
                                <p className="text-sm text-muted-foreground">Поставщиков: {item.suppliers}</p>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                              {item.spoilage > 5 && (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-destructive/10 border border-destructive/30">
                                  <Icon name="AlertTriangle" className="text-destructive" size={16} />
                                  <span className="text-sm font-medium">Высокая порча: {item.spoilage}%</span>
                                </div>
                              )}
                              {item.turnover > 14 && (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                                  <Icon name="Zap" className="text-green-500" size={16} />
                                  <span className="text-sm font-medium">Быстрая оборачиваемость</span>
                                </div>
                              )}
                              {isOverstock && (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-500/10 border border-orange-500/30">
                                  <Icon name="Package" className="text-orange-500" size={16} />
                                  <span className="text-sm font-medium">Затоваривание: риск порчи</span>
                                </div>
                              )}
                              {isUnderstock && Math.abs(optimalDiff) > item.optimal * 0.3 && (
                                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                                  <Icon name="ShoppingCart" className="text-yellow-500" size={16} />
                                  <span className="text-sm font-medium">Срочная закупка требуется</span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-gradient-card backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Target" className="text-primary" />
                      Рекомендации и план действий
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg border border-destructive/50 bg-destructive/10">
                        <div className="flex items-start gap-3 mb-3">
                          <Icon name="AlertCircle" className="text-destructive mt-1" size={24} />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-lg">Критическая ситуация: Специи</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Запас на грани истощения — осталось 45 кг при норме 180 кг
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="ShoppingBag" size={16} className="text-destructive" />
                            <span>Срочный заказ: 135 кг (+300%)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="DollarSign" size={16} className="text-destructive" />
                            <span>Затраты на закупку: ~255 000 ₽</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="TrendingUp" size={16} className="text-green-500" />
                            <span className="text-green-500">Избежать дефицита: экономия 420 000 ₽</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-orange-500/50 bg-orange-500/10">
                        <div className="flex items-start gap-3 mb-3">
                          <Icon name="Package" className="text-orange-500 mt-1" size={24} />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-lg">Избыток: Морепродукты</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Затоваривание 54% — риск порчи скоропортящихся продуктов
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="TrendingDown" size={16} className="text-orange-500" />
                            <span>Снизить закупки на 35% в следующем цикле</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Sparkles" size={16} className="text-orange-500" />
                            <span>Запустить акцию на блюда с морепродуктами</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Save" size={16} className="text-green-500" />
                            <span className="text-green-500">Предотвратить потери: 118 000 ₽</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-yellow-500/50 bg-yellow-500/10">
                        <div className="flex items-start gap-3 mb-3">
                          <Icon name="TrendingUp" className="text-yellow-500 mt-1" size={24} />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-lg">Низкий уровень: Овощи</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Запас ниже оптимума на 38% — высокий спрос не покрывается
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="ArrowUp" size={16} className="text-yellow-500" />
                            <span>Увеличить закупку на 170 кг до оптимума</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="DollarSign" size={16} className="text-yellow-500" />
                            <span>Инвестиция: ~88 000 ₽</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="TrendingUp" size={16} className="text-green-500" />
                            <span className="text-green-500">Доп. прибыль от продаж: 156 000 ₽</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-blue-500/50 bg-blue-500/10">
                        <div className="flex items-start gap-3 mb-3">
                          <Icon name="BarChart3" className="text-blue-500 mt-1" size={24} />
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-lg">Оптимизация: Общий склад</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Потенциал экономии за счет балансировки запасов
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Icon name="Percent" size={16} className="text-blue-500" />
                            <span>Снизить общую порчу с 3.6% до 2.1%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="RotateCw" size={16} className="text-blue-500" />
                            <span>Улучшить оборачиваемость на 18%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Wallet" size={16} className="text-green-500" />
                            <span className="text-green-500 font-semibold">Итоговая экономия: 287 000 ₽/мес</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {activeSection === 'analytics' && (
              <>
                <Tabs defaultValue="profitability" className="space-y-6">
                  <TabsList className="bg-card border border-border">
                    <TabsTrigger value="profitability">Рентабельность</TabsTrigger>
                    <TabsTrigger value="forecast">Прогнозы</TabsTrigger>
                    <TabsTrigger value="costprice">Себестоимость</TabsTrigger>
                    <TabsTrigger value="losses">Убытки</TabsTrigger>
                  </TabsList>

                  <TabsContent value="profitability" className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="TrendingUp" className="text-green-500" />
                            Топ-5 прибыльных позиций
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {topProducts.map((product, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge className="gradient-purple">{idx + 1}</Badge>
                                    <span className="font-semibold">{product.name}</span>
                                  </div>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>Продаж: {product.sales}</span>
                                    <span>Маржа: {product.margin}%</span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold text-green-500">
                                    +{product.profit.toLocaleString('ru-RU')} ₽
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="TrendingDown" className="text-destructive" />
                            Убыточные позиции
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {bottomProducts.map((product, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Icon name="AlertTriangle" className="text-destructive" size={18} />
                                    <span className="font-semibold">{product.name}</span>
                                  </div>
                                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>Продаж: {product.sales}</span>
                                    <span>Маржа: {product.margin}%</span>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold text-destructive">
                                    {product.profit.toLocaleString('ru-RU')} ₽
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                            <div className="flex items-start gap-3">
                              <Icon name="Lightbulb" className="text-yellow-500 mt-1" size={20} />
                              <div>
                                <h4 className="font-semibold mb-1">Рекомендация</h4>
                                <p className="text-sm text-muted-foreground">
                                  Убрать "Фондю" и "Устрицы" из меню или повысить цену на 25-30%. Экономия: 20 500 ₽/мес
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle>Рентабельность по месяцам</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                          <LineChart data={revenueData.map((d) => ({
                            ...d,
                            margin: ((d.revenue - d.cost) / d.revenue * 100).toFixed(1),
                          }))}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="month" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#1F2937',
                                border: '1px solid #374151',
                                borderRadius: '8px',
                              }}
                            />
                            <Line
                              type="monotone"
                              dataKey="margin"
                              stroke="#10B981"
                              strokeWidth={3}
                              name="Рентабельность %"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="forecast" className="space-y-6">
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle>Прогноз выручки на 3 месяца</CardTitle>
                        <CardDescription>На основе ML-алгоритмов и исторических данных</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={350}>
                          <AreaChart
                            data={[
                              ...revenueData,
                              { month: 'Июл', revenue: 1420000, cost: 920000, forecast: true },
                              { month: 'Авг', revenue: 1580000, cost: 980000, forecast: true },
                              { month: 'Сен', revenue: 1650000, cost: 1020000, forecast: true },
                            ]}
                          >
                            <defs>
                              <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="month" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#1F2937',
                                border: '1px solid #374151',
                                borderRadius: '8px',
                              }}
                            />
                            <Area
                              type="monotone"
                              dataKey="revenue"
                              stroke="#10B981"
                              fillOpacity={1}
                              fill="url(#colorForecast)"
                              name="Прогноз выручки"
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                          <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                            <p className="text-sm text-muted-foreground mb-1">Июль 2026</p>
                            <p className="text-2xl font-bold">1 420 000 ₽</p>
                            <p className="text-sm text-green-500 mt-1">↑ 5.2%</p>
                          </div>
                          <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                            <p className="text-sm text-muted-foreground mb-1">Август 2026</p>
                            <p className="text-2xl font-bold">1 580 000 ₽</p>
                            <p className="text-sm text-green-500 mt-1">↑ 11.3%</p>
                          </div>
                          <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                            <p className="text-sm text-muted-foreground mb-1">Сентябрь 2026</p>
                            <p className="text-2xl font-bold">1 650 000 ₽</p>
                            <p className="text-sm text-green-500 mt-1">↑ 4.4%</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="costprice">
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle>Анализ себестоимости</CardTitle>
                        <CardDescription>Структура затрат по категориям</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {[
                            { name: 'Продукты', cost: 420000, percent: 48 },
                            { name: 'Зарплата', cost: 280000, percent: 32 },
                            { name: 'Аренда', cost: 120000, percent: 14 },
                            { name: 'Коммунальные', cost: 35000, percent: 4 },
                            { name: 'Прочее', cost: 25000, percent: 2 },
                          ].map((item, idx) => (
                            <div key={idx}>
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium">{item.name}</span>
                                <div className="text-right">
                                  <span className="font-bold">{item.cost.toLocaleString('ru-RU')} ₽</span>
                                  <span className="text-sm text-muted-foreground ml-2">({item.percent}%)</span>
                                </div>
                              </div>
                              <Progress value={item.percent} className="h-3" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="losses">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-destructive">Убытки по категориям</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {[
                              { category: 'Порча продуктов', amount: 85000, trend: -12 },
                              { category: 'Списания', amount: 32000, trend: 5 },
                              { category: 'Убыточные блюда', amount: 20500, trend: -8 },
                              { category: 'Ошибки персонала', amount: 4500, trend: 15 },
                            ].map((loss, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-destructive/10">
                                <div>
                                  <p className="font-semibold">{loss.category}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {loss.trend > 0 ? '↑' : '↓'} {Math.abs(loss.trend)}% к прошлому месяцу
                                  </p>
                                </div>
                                <p className="text-xl font-bold text-destructive">
                                  {loss.amount.toLocaleString('ru-RU')} ₽
                                </p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-border/50 bg-gradient-card backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Icon name="Sparkles" className="text-primary" />
                            План экономии
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                              <div className="flex items-start gap-3">
                                <Icon name="CheckCircle2" className="text-green-500 mt-1" size={20} />
                                <div>
                                  <h4 className="font-semibold mb-1">Оптимизация меню</h4>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    Убрать убыточные блюда и пересмотреть рецептуру
                                  </p>
                                  <p className="text-lg font-bold text-green-500">Экономия: 45 000 ₽/мес</p>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30">
                              <div className="flex items-start gap-3">
                                <Icon name="Package" className="text-blue-500 mt-1" size={20} />
                                <div>
                                  <h4 className="font-semibold mb-1">Контроль запасов</h4>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    Автоматизация учета и FIFO для скоропортящихся продуктов
                                  </p>
                                  <p className="text-lg font-bold text-blue-500">Экономия: 62 000 ₽/мес</p>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
                              <div className="flex items-start gap-3">
                                <Icon name="Users" className="text-purple-500 mt-1" size={20} />
                                <div>
                                  <h4 className="font-semibold mb-1">Обучение персонала</h4>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    Снижение ошибок и повышение скорости обслуживания
                                  </p>
                                  <p className="text-lg font-bold text-purple-500">Экономия: 18 000 ₽/мес</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 p-4 rounded-lg gradient-purple">
                            <p className="text-sm text-white/80 mb-1">Общая потенциальная экономия</p>
                            <p className="text-3xl font-bold text-white">125 000 ₽/мес</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </>
            )}

            {activeSection === 'staff' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Структура персонала</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {staffData.map((dept, idx) => (
                      <div key={idx} className="mb-6 last:mb-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{dept.department}</span>
                          <div className="text-right">
                            <span className="font-bold">{dept.count} чел.</span>
                            <Badge className="ml-2 gradient-purple">{dept.efficiency}%</Badge>
                          </div>
                        </div>
                        <Progress value={dept.efficiency} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Быстрые действия</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start gradient-purple hover:opacity-90" size="lg">
                      <Icon name="UserPlus" className="mr-2" />
                      Добавить сотрудника
                    </Button>
                    <Button className="w-full justify-start gradient-blue hover:opacity-90" size="lg">
                      <Icon name="Calendar" className="mr-2" />
                      Планировать смены
                    </Button>
                    <Button className="w-full justify-start" variant="outline" size="lg">
                      <Icon name="DollarSign" className="mr-2" />
                      Расчет зарплаты
                    </Button>
                    <Button className="w-full justify-start" variant="outline" size="lg">
                      <Icon name="FileText" className="mr-2" />
                      Отчет по персоналу
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {['products', 'finance', 'reports'].includes(activeSection) && (
              <Card className="border-border/50 bg-gradient-card backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <Icon name="Construction" size={48} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-2xl font-bold mb-2">Раздел в разработке</h3>
                  <p className="text-muted-foreground">
                    Этот модуль будет доступен в следующей версии
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;