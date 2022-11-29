--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Debian 14.6-1.pgdg110+1)
-- Dumped by pg_dump version 14.6 (Debian 14.6-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: restaurants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.restaurants (
    id integer NOT NULL,
    wkb_geometry bytea,
    name character varying,
    lvl_zoom integer,
    type_object character varying,
    file_name character varying,
    hint character varying,
    coordinates double precision[]
);


ALTER TABLE public.restaurants OWNER TO postgres;

--
-- Name: restaurants_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.restaurants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.restaurants_id_seq OWNER TO postgres;

--
-- Name: restaurants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.restaurants_id_seq OWNED BY public.restaurants.id;


--
-- Name: restaurants id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants ALTER COLUMN id SET DEFAULT nextval('public.restaurants_id_seq'::regclass);


--
-- Data for Name: restaurants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.restaurants (id, wkb_geometry, name, lvl_zoom, type_object, file_name, hint, coordinates) FROM stdin;
1	\\x01010000008094b7a8169c0240cc2ae7078f6f4840	Shinko	5	requires_object	shinko.jpg	Ce restaurant requiert une lettre de recommendation, qui se trouve sur la tour Montparnasse	{2.326215093710346,48.87155245578251}
2	\\x0101000000802441b070930240d47f7b6cca6b4840	Tour Montparnasse	10	required_object	letter.jpg		{2.321992279994959,48.84211498289338}
3	\\x0101000000006c41b74795024094dc72c1376a4840	The Village Terrazza	5	requires_code	village.jpg	Ce restaurant requiert un code, situé sur une la place du pays du restaurant	{2.322890693363206,48.82982652767637}
4	\\x010100000000a8c3298fd8024054c8e352686a4840	Place d'Italie	10	code	place.jpg	1861	{2.355741812022643,48.83130870935625}
5	\\x010100000040a0eb4762dc024004f24116c06d4840	Au Petit Fer à Cheval	8	object	cheval.jpg		{2.357609331014856,48.85742452831258}
\.


--
-- Name: restaurants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.restaurants_id_seq', 5, true);


--
-- Name: restaurants restaurants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.restaurants
    ADD CONSTRAINT restaurants_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

