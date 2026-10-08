import { test, expect } from "@playwright/test";

const routes = [
  "",
  "equipe/",
  "projetos/",
  "projetos/fcp-01/",
  "patrocinadores/",
  "contato/",
];
test("destaque FCP-01 e filtros de status", async ({ page }) => {
  await page.goto("./");
  await page.getByRole("link", { name: "Explore o FCP-01", exact: true }).click();
  await expect(page).toHaveURL(/projetos\/fcp-01\/$/);
  await page.goto("projetos/");
  const filters = page.getByRole("group", {
    name: "Filtrar projetos por status",
  });
  await expect(page.locator(".project-card")).toHaveCount(2);
  await filters
    .getByRole("button", { name: "Em desenvolvimento (0)", exact: true })
    .click();
  await expect(page.locator(".project-card")).toHaveCount(0);
  await expect(
    page.getByText("Nenhum projeto cadastrado neste status.", { exact: true }),
  ).toBeVisible();
  await filters
    .getByRole("button", { name: "Status a confirmar (2)", exact: true })
    .click();
  await expect(page.locator(".project-card")).toHaveCount(2);
  await expect(
    filters.getByRole("button", {
      name: "Status a confirmar (2)",
      exact: true,
    }),
  ).toHaveAttribute("aria-pressed", "true");
  await filters.getByRole("button", { name: "Todos (2)", exact: true }).click();
  await expect(page.locator(".project-card")).toHaveCount(2);
});
test("CanSat: acesso pelo catálogo e abertura direta", async ({ page }) => {
  await page.goto("projetos/");
  await page
    .getByRole("link", { name: "Conheça o CubeDesign — CanSat" })
    .click();
  await expect(page).toHaveURL(/projetos\/cansat\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "CubeDesign — CanSat",
  );
  await expect(page.locator("main .pending")).toHaveText(
    "Resultado a confirmar",
  );
  await expect(page.locator("main .eyebrow")).toContainText(
    "CEFET-MG / ENGENHARIA AEROESPACIAL",
  );
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("link", { name: "Todos os projetos" }).click();
  await expect(page).toHaveURL(/projetos\/$/);
  for (const route of ["projetos/cansat", "projetos/cansat/index.html"]) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "CubeDesign — CanSat",
    );
  }
});
for (const route of routes) {
  test(`abertura direta e metadados: /${route}`, async ({ page }) => {
    const errors: string[] = [];
    const failedAssets: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("response", (response) => {
      if (
        response.status() >= 400 &&
        ["image", "script", "stylesheet", "font"].includes(
          response.request().resourceType(),
        )
      )
        failedAssets.push(response.url());
    });
    const response = await page.goto(route || "./");
    expect(response?.status()).toBe(200);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator('#navigation [aria-current="page"]')).toHaveCount(
      route === "projetos/fcp-01/" ? 0 : 1,
    );
    if (route !== "projetos/fcp-01/") {
      await expect(
        page.locator('#navigation [aria-current="page"]'),
      ).toHaveAttribute("href", `/cefastaerospace-site/${route}`);
      await expect(page.locator('#navigation [aria-current="page"]')).toHaveCSS(
        "color",
        "rgb(57, 188, 233)",
      );
    }
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      `https://cefastaerospace.github.io/cefastaerospace-site/${route}`,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://cefastaerospace.github.io/cefastaerospace-site/${route}`,
    );
    for (const meta of ["og:title", "og:description", "og:image", "og:type"])
      await expect(page.locator(`meta[property="${meta}"]`)).toHaveAttribute(
        "content",
        /.+/,
      );
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      "content",
      /.+/,
    );
    const ogImage = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    const imageResponse = await page.request.get(new URL(ogImage!).pathname);
    expect(imageResponse.ok()).toBeTruthy();
    expect(imageResponse.headers()["content-type"]).toContain("image/");
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        page
          .locator("img")
          .evaluateAll((images) =>
            images.every(
              (img) =>
                (img as HTMLImageElement).complete &&
                (img as HTMLImageElement).naturalWidth > 0,
            ),
          ),
      )
      .toBeTruthy();
    for (const path of [
      route || "./",
      route ? route.replace(/\/$/, "") : "index.html",
      `${route}index.html`,
    ]) {
      expect((await page.goto(path))?.status()).toBe(200);
      await expect(page.locator("main h1")).toHaveCount(1);
      await page.reload();
      await expect(page.locator("main h1")).toHaveCount(1);
    }
    expect(failedAssets).toEqual([]);
    expect(errors).toEqual([]);
  });
}
test("navegação entre as seis páginas e retorno à home", async ({ page }) => {
  await page.goto("./");
  const nav = page.getByRole("navigation", { name: "Navegação principal" });
  await expect(
    nav.getByRole("link", { name: "FCP-01", exact: true }),
  ).toHaveCount(0);
  for (const label of [
    "Equipe",
    "Projetos",
    "Patrocinadores",
    "Contato",
    "Início",
  ]) {
    await nav.getByRole("link", { name: label, exact: true }).click();
    await expect(page.locator("main h1")).toBeVisible();
  }
  await nav.getByRole("link", { name: "Projetos", exact: true }).click();
  await page.getByRole("link", { name: "Conheça o FCP-01" }).click();
  await expect(page).toHaveURL(/projetos\/fcp-01\/$/);
  await page.getByRole("link", { name: "Todos os projetos" }).click();
  await expect(page).toHaveURL(/projetos\/$/);
  for (const label of [
    "Equipe",
    "Projetos",
    "FCP-01",
    "Patrocinadores",
    "Contato",
  ]) {
    await page
      .getByRole("navigation", { name: "Links do rodapé" })
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page.locator("main h1")).toBeVisible();
  }
});
test("mobile: menu, setores e ausência de rolagem horizontal", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("./");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Equipe", exact: true })
    .click();
  await expect(page.locator(".sector-grid article")).toHaveCount(5);
  for (const name of [
    "Administração",
    "Controle & Energia",
    "Embarcados",
    "Mecânica",
    "Pesquisa & Desenvolvimento",
  ]) {
    await expect(
      page.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
  }
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route || "./");
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBeTruthy();
    }
  }
});
test("categorias em captação, subsistemas e seis contatos", async ({
  page,
}) => {
  await page.goto("patrocinadores/");
  await expect(page.getByText("Em captação", { exact: true })).toHaveCount(3);
  await page.goto("projetos/fcp-01/");
  await expect(
    page.getByRole("heading", { name: /^Subsistema \d+ — a confirmar$/ }),
  ).toHaveCount(7);
  await expect(page.getByText("2U", { exact: true })).toBeVisible();
  await page.goto("contato/");
  const links = page.locator(".contact-list a");
  await expect(links).toHaveCount(6);
  const destinations = await links.evaluateAll((nodes) =>
    nodes.map((node) => ({
      text: node.textContent?.trim(),
      href: node.getAttribute("href"),
      icon: node.querySelector("svg")?.getAttribute("class"),
    })),
  );
  expect(destinations.map((item) => item.text)).toEqual([
    "Instagram",
    "Facebook",
    "LinkedIn",
    "YouTube",
    "GitHub",
    "E-mail",
  ]);
  expect(
    destinations.every(
      (item) =>
        item.href &&
        /^(https:\/\/|mailto:)/.test(item.href) &&
        item.icon?.includes("lucide"),
    ),
  ).toBeTruthy();
});
test("sitemap, robots e metadados disponíveis sem JavaScript", async ({
  request,
}) => {
  const sitemap = await request.get("sitemap.xml");
  expect(sitemap.ok()).toBeTruthy();
  const xml = await sitemap.text();
  expect(xml.match(/<loc>/g)).toHaveLength(7);
  for (const route of [...routes, "projetos/cansat/"])
    expect(xml).toContain(
      `https://cefastaerospace.github.io/cefastaerospace-site/${route}</loc>`,
    );
  const robots = await request.get("robots.txt");
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain(
    "Sitemap: https://cefastaerospace.github.io/cefastaerospace-site/sitemap.xml",
  );
  for (const route of routes) {
    const html = await (await request.get(route || "./")).text();
    for (const property of [
      "og:image",
      "og:url",
      "og:title",
      "og:description",
      "og:type",
    ])
      expect(html).toContain(`property="${property}"`);
    expect(html).toContain('rel="canonical"');
  }
});
