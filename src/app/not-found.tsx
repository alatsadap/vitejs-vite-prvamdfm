import Layout from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="glass p-12 max-w-lg">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
          </p>
          <Link href="/">
            <Button className="glass hover:bg-primary/20">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}