import type { AppLoadContext } from "@remix-run/cloudflare"

interface Env {
	DB: D1Database;
}

export function getEnv(context: AppLoadContext): Env {
	return context.cloudflare.env
}

